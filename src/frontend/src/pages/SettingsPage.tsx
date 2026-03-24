import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Loader2, Shield, User } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Footer from "../components/layout/Footer";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useCreateOrUpdateProfile, useMyProfile } from "../hooks/useQueries";

export default function SettingsPage() {
  const { identity, clear, login, isLoggingIn } = useInternetIdentity();
  const { data: profile, isLoading } = useMyProfile();
  const updateProfile = useCreateOrUpdateProfile();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName);
      setEmail(profile.email);
    }
  }, [profile]);

  const handleSave = async () => {
    try {
      await updateProfile.mutateAsync({ displayName, email });
      toast.success("Profile updated successfully");
    } catch {
      toast.error("Failed to save profile");
    }
  };

  if (!identity) {
    return (
      <div className="max-w-2xl mx-auto px-4 lg:px-6 py-8 text-center">
        <h1 className="font-display text-2xl font-bold text-foreground">
          Settings
        </h1>
        <p className="text-muted-foreground mt-2">
          Sign in to manage your profile and settings.
        </p>
        <Button
          onClick={login}
          disabled={isLoggingIn}
          className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
          data-ocid="settings.signin_button"
        >
          {isLoggingIn ? "Signing in\u2026" : "Sign In"}
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 lg:px-6 py-8 space-y-6">
      <div
        className="opacity-0 animate-fade-up"
        style={{ animationFillMode: "forwards" }}
      >
        <h1 className="font-display text-3xl font-bold text-foreground">
          Settings
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your profile and account preferences.
        </p>
      </div>

      <Card
        className="shadow-card opacity-0 animate-fade-up animate-stagger-2"
        style={{ animationFillMode: "forwards" }}
      >
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="font-display text-base">Profile</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Update your display name and contact details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isLoading ? (
            <div
              className="flex items-center gap-2 text-muted-foreground"
              data-ocid="settings.loading_state"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Loading profile\u2026</span>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Your name"
                    data-ocid="settings.name.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    data-ocid="settings.email.input"
                  />
                </div>
              </div>
              <Button
                onClick={handleSave}
                disabled={updateProfile.isPending}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-ocid="settings.save_button"
              >
                {updateProfile.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Saving\u2026
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      <Card
        className="shadow-card opacity-0 animate-fade-up animate-stagger-3"
        style={{ animationFillMode: "forwards" }}
      >
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="font-display text-base">Account</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Manage your authentication and security.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 rounded-md bg-secondary/60 text-sm">
            <p className="font-medium text-foreground text-xs">Principal ID</p>
            <p className="text-muted-foreground text-xs font-mono mt-0.5 break-all">
              {identity?.getPrincipal().toString()}
            </p>
          </div>
          <Separator />
          <Button
            variant="outline"
            onClick={clear}
            className="text-destructive border-destructive/30 hover:bg-destructive/5"
            data-ocid="settings.signout_button"
          >
            Sign Out
          </Button>
        </CardContent>
      </Card>

      <Footer />
    </div>
  );
}
