import Int "mo:core/Int";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Map "mo:core/Map";
import List "mo:core/List";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type UserProfile = {
    userId : Principal;
    displayName : Text;
    email : Text;
    createdAt : Int;
    onboardingCompleted : Bool;
    currentTradeId : Text;
  };

  module UserProfile {
    public func compare(a : UserProfile, b : UserProfile) : { #less; #equal; #greater } {
      Int.compare(a.createdAt, b.createdAt);
    };
  };

  type SkillAssessment = {
    userId : Principal;
    tradeId : Text;
    level : Text;
    assessedAt : Int;
  };

  module SkillAssessment {
    public func compare(a : SkillAssessment, b : SkillAssessment) : { #less; #equal; #greater } {
      Int.compare(a.assessedAt, b.assessedAt);
    };
  };

  type PathwayEnrollment = {
    userId : Principal;
    pathwayId : Text;
    tradeId : Text;
    enrolledAt : Int;
    completedModules : [Text];
  };

  module PathwayEnrollment {
    public func compare(a : PathwayEnrollment, b : PathwayEnrollment) : { #less; #equal; #greater } {
      Int.compare(a.enrolledAt, b.enrolledAt);
    };
  };

  type ProgressRecord = {
    userId : Principal;
    moduleId : Text;
    tradeId : Text;
    completedAt : Int;
    score : Nat;
  };

  module ProgressRecord {
    public func compare(a : ProgressRecord, b : ProgressRecord) : { #less; #equal; #greater } {
      Int.compare(a.completedAt, b.completedAt);
    };
  };

  type QuizResult = {
    userId : Principal;
    quizId : Text;
    score : Nat;
    totalQuestions : Nat;
    completedAt : Int;
  };

  module QuizResult {
    public func compare(a : QuizResult, b : QuizResult) : { #less; #equal; #greater } {
      Int.compare(a.completedAt, b.completedAt);
    };
  };

  type SavedAnswer = {
    userId : Principal;
    questionId : Text;
    answer : Text;
    savedAt : Int;
  };

  module SavedAnswer {
    public func compare(a : SavedAnswer, b : SavedAnswer) : { #less; #equal; #greater } {
      Int.compare(a.savedAt, b.savedAt);
    };
  };

  let userProfiles = Map.empty<Principal, UserProfile>();
  let skillAssessmentList = List.empty<SkillAssessment>();
  let pathwayEnrollmentList = List.empty<PathwayEnrollment>();
  let progressRecordList = List.empty<ProgressRecord>();
  let quizResultList = List.empty<QuizResult>();
  let savedAnswerList = List.empty<SavedAnswer>();

  // Required profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Application-specific functions
  public query ({ caller }) func getMyProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public shared ({ caller }) func createOrUpdateProfile(displayName : Text, email : Text) : async UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create profiles");
    };
    let now = Time.now();
    let existingProfile = userProfiles.get(caller);
    let newProfile : UserProfile = switch (existingProfile) {
      case (null) {
        {
          userId = caller;
          displayName;
          email;
          createdAt = now;
          onboardingCompleted = false;
          currentTradeId = "";
        };
      };
      case (?existing) {
        {
          existing with
          displayName;
          email;
        };
      };
    };
    userProfiles.add(caller, newProfile);
    newProfile;
  };

  public shared ({ caller }) func completeOnboarding(tradeId : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can complete onboarding");
    };
    switch (userProfiles.get(caller)) {
      case (null) { Runtime.trap("Profile not found. Please create one first!") };
      case (?profile) {
        let updatedProfile : UserProfile = {
          profile with
          currentTradeId = tradeId;
          onboardingCompleted = true;
        };
        userProfiles.add(caller, updatedProfile);
        true;
      };
    };
  };

  public shared ({ caller }) func saveSkillAssessment(tradeId : Text, level : Text) : async SkillAssessment {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save skill assessments");
    };
    let now = Time.now();
    let assessment : SkillAssessment = {
      userId = caller;
      tradeId;
      level;
      assessedAt = now;
    };
    skillAssessmentList.add(assessment);
    assessment;
  };

  public query ({ caller }) func getMySkillAssessments() : async [SkillAssessment] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view skill assessments");
    };
    skillAssessmentList.filter(func(a) { a.userId == caller }).toArray().sort();
  };

  public shared ({ caller }) func enrollInPathway(pathwayId : Text, tradeId : Text) : async PathwayEnrollment {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can enroll in pathways");
    };
    let now = Time.now();
    let enrollment : PathwayEnrollment = {
      userId = caller;
      pathwayId;
      tradeId;
      enrolledAt = now;
      completedModules = [];
    };
    pathwayEnrollmentList.add(enrollment);
    enrollment;
  };

  public query ({ caller }) func getMyEnrollments() : async [PathwayEnrollment] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view enrollments");
    };
    pathwayEnrollmentList.filter(func(e) { e.userId == caller }).toArray().sort();
  };

  public shared ({ caller }) func completeModule(pathwayId : Text, moduleId : Text, tradeId : Text, score : Nat) : async ProgressRecord {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can complete modules");
    };
    let now = Time.now();
    let record : ProgressRecord = {
      userId = caller;
      moduleId;
      tradeId;
      completedAt = now;
      score;
    };

    let pathwayEnrollments = pathwayEnrollmentList.find(func(e) { e.userId == caller and e.pathwayId == pathwayId });

    switch (pathwayEnrollments) {
      case (null) { () };
      case (?enrollment) {
        let updatedModules = enrollment.completedModules.concat([moduleId]);
        let updatedEnrollment = {
          enrollment with
          completedModules = updatedModules;
        };
        pathwayEnrollmentList.add(updatedEnrollment);
      };
    };
    progressRecordList.add(record);
    record;
  };

  public query ({ caller }) func getMyProgress() : async [ProgressRecord] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view progress");
    };
    progressRecordList.filter(func(r) { r.userId == caller }).toArray().sort();
  };

  public shared ({ caller }) func recordQuizResult(quizId : Text, score : Nat, totalQuestions : Nat) : async QuizResult {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can record quiz results");
    };
    let now = Time.now();
    let result : QuizResult = {
      userId = caller;
      quizId;
      score;
      totalQuestions;
      completedAt = now;
    };
    quizResultList.add(result);
    result;
  };

  public query ({ caller }) func getMyQuizResults() : async [QuizResult] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view quiz results");
    };
    quizResultList.filter(func(r) { r.userId == caller }).toArray().sort();
  };

  public shared ({ caller }) func saveAnswer(questionId : Text, answer : Text) : async SavedAnswer {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save answers");
    };
    let now = Time.now();
    let saved : SavedAnswer = {
      userId = caller;
      questionId;
      answer;
      savedAt = now;
    };
    savedAnswerList.add(saved);
    saved;
  };

  public query ({ caller }) func getMySavedAnswers() : async [SavedAnswer] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view saved answers");
    };
    savedAnswerList.filter(func(a) { a.userId == caller }).toArray().sort();
  };

  public shared ({ caller }) func clearSavedAnswers() : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can clear saved answers");
    };
  };
};
