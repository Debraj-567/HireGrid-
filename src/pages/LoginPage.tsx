import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Github, Chrome } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-muted/20">
      <Card className="w-full max-w-md shadow-2xl border-border/50">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">Welcome back</CardTitle>
          <CardDescription>
            Enter your credentials to access your HireGrid account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="gap-2">
              <Chrome className="w-4 h-4" /> Google
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" /> GitHub
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input type="email" placeholder="name@example.com" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Password</label>
                <Link to="#" className="text-xs text-indigo-600 hover:underline">Forgot password?</Link>
              </div>
              <Input type="password" placeholder="••••••••" />
            </div>
          </div>
          
          <Button className="w-full h-11 bg-indigo-600 hover:bg-indigo-700">
            Sign In
          </Button>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-center gap-1 text-sm text-muted-foreground">
          Don't have an account? 
          <Link to="/register" className="text-indigo-600 font-semibold hover:underline">Sign up</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
