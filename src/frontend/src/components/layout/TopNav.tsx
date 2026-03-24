import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useRouterState } from "@tanstack/react-router";
import { GraduationCap, LogOut, User } from "lucide-react";
import { useInternetIdentity } from "../../hooks/useInternetIdentity";
import { useMyProfile } from "../../hooks/useQueries";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/map": "Building Map",
  "/settings": "Settings",
};

function getPageTitle(pathname: string): string {
  if (pageTitles[pathname]) return pageTitles[pathname];
  if (pathname.match(/^\/trade\/[^/]+\/module\//)) return "Module";
  if (pathname.match(/^\/trade\/[^/]+\/quiz\//)) return "Quiz";
  if (pathname.match(/^\/trade\//)) return "Trade Overview";
  return "";
}

export default function TopNav() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const { identity, login, clear, isLoggingIn } = useInternetIdentity();
  const { data: profile } = useMyProfile();
  const pageTitle = getPageTitle(pathname);

  const initials = profile?.displayName
    ? profile.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="flex h-14 items-center px-4 lg:px-6 gap-4">
        {/* Logo */}
        <Link
          to="/dashboard"
          className="flex items-center gap-2 shrink-0"
          data-ocid="topnav.link"
        >
          <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center">
            <GraduationCap className="h-4 w-4 text-background" />
          </div>
          <span className="font-display font-bold text-lg text-foreground tracking-tight hidden sm:block">
            Voc<span className="text-accent">Path</span>
          </span>
        </Link>

        {/* Page title */}
        <span className="text-sm font-medium text-muted-foreground flex-1 text-center sm:text-left">
          {pageTitle}
        </span>

        {/* Right side */}
        {identity ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                data-ocid="topnav.user_dropdown_menu"
                className="flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Avatar className="h-8 w-8 border border-border">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs font-medium">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:block text-sm font-medium text-foreground">
                  {profile?.displayName || "Account"}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link
                  to="/settings"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={clear}
                className="flex items-center gap-2 text-destructive cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            onClick={login}
            disabled={isLoggingIn}
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-ocid="topnav.login_button"
          >
            {isLoggingIn ? "Signing in\u2026" : "Sign In"}
          </Button>
        )}
      </div>
    </header>
  );
}
