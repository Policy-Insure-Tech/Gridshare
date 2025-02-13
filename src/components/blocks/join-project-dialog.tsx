
"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription ,DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Users, Phone, MapPin, Sparkles } from "lucide-react";

interface JoinProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JoinProjectDialog({ open, onOpenChange }: JoinProjectDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Registration Successful!",
      description: "Our experts will contact you within 24 hours.",
    });

    setIsLoading(false);
    onOpenChange(false);
    setFormData({ name: "", phone: "", pincode: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-5 w-5 text-orange-500" />
            Join GridShare Project
          </DialogTitle>
          <DialogDescription>
            Start your solar journey with us today
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Full Name
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-input/50 focus:border-orange-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              required
              type="tel"
              pattern="[0-9]{10}"
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border-input/50 focus:border-orange-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pincode" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              PIN Code
            </Label>
            <Input
              id="pincode"
              required
              pattern="[0-9]{6}"
              placeholder="6-digit PIN code"
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              className="border-input/50 focus:border-orange-500"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Join Project"}
          </Button>
{/* 
          <div className="mt-6 rounded-lg border border-orange-100 bg-orange-50/50 p-4 text-sm">
            <p className="mb-3 text-orange-800">
              Our solar experts will contact you within 24 hours to help you onboard and explain how you can start saving with GridShare.
            </p>
            <ul className="space-y-2 text-orange-700">
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-orange-500" />
                Free consultation and savings calculation
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-orange-500" />
                Personalized plan based on your power consumption
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-orange-500" />
                Complete assistance throughout the onboarding process
              </li>
            </ul>
          </div> */}
        </form>
      </DialogContent>
    </Dialog>
  );
}
