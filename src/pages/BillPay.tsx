
import { Card, CardContent } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Receipt, Plus, HelpCircle, Home, CreditCard, User, Wallet, PiggyBank } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

interface SavedBiller {
  id: string;
  customerId: string;
  nickname?: string;
  billAmount: number;
  dueDate: string;
  accountHolder: string;
}

const StatsCard = ({ title, value, icon: Icon, className }: {
  title: string;
  value: string;
  icon: React.ComponentType<any>;
  className?: string;
}) => (
  <Card className={cn("flex items-center gap-4 p-4", className)}>
    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", className)}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  </Card>
);

const BillDetailsCard = ({ biller }: { biller: SavedBiller }) => (
  <Card className="p-6 animate-appear-zoom">
    <h3 className="text-2xl font-bold mb-4">Bill Due of ₹{biller.billAmount.toLocaleString()}</h3>
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div>
        <p className="text-muted-foreground">Due Date</p>
        <p className="font-medium">{biller.dueDate}</p>
      </div>
      <div>
        <p className="text-muted-foreground">Account ID</p>
        <p className="font-medium">{biller.customerId}</p>
      </div>
      <div className="col-span-2">
        <p className="text-muted-foreground">Account Holder</p>
        <p className="font-medium">{biller.accountHolder}</p>
      </div>
    </div>
  </Card>
);

const PaymentBreakdownCard = ({ biller }: { biller: SavedBiller }) => (
  <Card className="overflow-hidden mt-4 animate-appear-zoom" style={{ animationDelay: "100ms" }}>
    <div className="bg-gradient-to-br from-purple-600 to-purple-400 p-6 text-white relative">
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Bill Amount</span>
          <span>₹{biller.billAmount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Credits Added</span>
          <span>₹{biller.billAmount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Final Payable</span>
          <span>₹0</span>
        </div>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10">
        <CreditCard className="w-24 h-24" />
      </div>
    </div>
  </Card>
);

const SuccessAnimation = () => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-white rounded-lg p-8 flex flex-col items-center gap-4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            d="M20 6L9 17l-5-5"
          />
        </motion.svg>
      </motion.div>
      <h3 className="text-xl font-semibold">Payment Successful!</h3>
      <p className="text-muted-foreground">Your bill has been paid using credits</p>
    </motion.div>
  </motion.div>
);

const EmptyState = ({ onAddBiller }: { onAddBiller: () => void }) => (
  <div className="text-center space-y-4 animate-appear-zoom">
    <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
      <CreditCard className="w-10 h-10 text-muted-foreground" />
    </div>
    <div>
      <h3 className="font-semibold text-lg">No Saved Bills</h3>
      <p className="text-sm text-muted-foreground">Add your first biller to get started</p>
    </div>
    <button 
      onClick={onAddBiller}
      className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
    >
      <Plus className="w-4 h-4" />
      Add Biller
    </button>
  </div>
);

const ActionCard = ({ icon: Icon, title, onClick }: { 
  icon: React.ComponentType<any>;
  title: string;
  onClick: () => void;
}) => (
  <Card 
    className="hover:bg-accent cursor-pointer transition-colors animate-appear-zoom"
    onClick={onClick}
  >
    <CardContent className="p-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
        <Icon className="w-5 h-5 text-muted-foreground" />
      </div>
      <span className="font-medium">{title}</span>
    </CardContent>
  </Card>
);

const AddBillerDialog = ({ open, onOpenChange, onAddBiller }: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
  onAddBiller: (biller: SavedBiller) => void;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock biller data - in a real app this would come from form values
    const newBiller: SavedBiller = {
      id: "1",
      customerId: "123456789",
      billAmount: 5000,
      dueDate: "24 July",
      accountHolder: "Tarun Joseph"
    };
    onAddBiller(newBiller);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Biller</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">State</label>
            <Input value="Tamil Nadu" readOnly className="bg-muted" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Electricity Board</label>
            <Input value="TNEB" readOnly className="bg-muted" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Customer ID</label>
            <Input placeholder="Enter your Customer ID" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Nickname (Optional)</label>
            <Input placeholder="e.g. Home" />
          </div>
          <button type="submit" className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Link Account
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const BottomNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6">
    <div className="max-w-md mx-auto flex justify-around items-center">
      <button className="flex flex-col items-center gap-1 text-muted-foreground">
        <Home className="h-5 w-5" />
        <span className="text-xs">Home</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-primary">
        <CreditCard className="h-5 w-5" />
        <span className="text-xs">Bill Pay</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-muted-foreground">
        <User className="h-5 w-5" />
        <span className="text-xs">Account</span>
      </button>
    </div>
  </div>
);

const BillPay = () => {
  const [addBillerOpen, setAddBillerOpen] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [savedBiller, setSavedBiller] = useState<SavedBiller | null>(null);
  
  const hasSavedBillers = savedBiller !== null;

  const handlePayment = () => {
    setShowSuccessAnimation(true);
    setTimeout(() => setShowSuccessAnimation(false), 3000);
  };

  return (
    <div className="relative min-h-screen bg-background pb-20">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray="4 2"
        className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
      />
      
      <div className="relative z-10 max-w-md mx-auto p-6">
        <div className="mb-8 animate-appear" style={{ animationDelay: "100ms" }}>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold tracking-tight">Bill Pay</h2>
            {hasSavedBillers && (
              <button 
                onClick={() => setAddBillerOpen(true)}
                className="inline-flex items-center gap-2 bg-primary text-white px-3 py-1.5 rounded-md text-sm hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Biller
              </button>
            )}
          </div>
          <p className="text-muted-foreground">Manage and pay your electricity bills</p>
        </div>

        <div className="space-y-6">
          {!hasSavedBillers ? (
            <EmptyState onAddBiller={() => setAddBillerOpen(true)} />
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <StatsCard
                  title="Available Credits"
                  value="₹5,000"
                  icon={Wallet}
                  className="bg-purple-50 text-purple-500"
                />
                <StatsCard
                  title="Total Savings"
                  value="₹0"
                  icon={PiggyBank}
                  className="bg-green-50 text-green-500"
                />
              </div>

              <BillDetailsCard biller={savedBiller} />
              <PaymentBreakdownCard biller={savedBiller} />

              <button
                onClick={handlePayment}
                className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors animate-appear-zoom"
                style={{ animationDelay: "200ms" }}
              >
                Pay using Credits
              </button>
            </div>
          )}

          <div className="space-y-3 mt-8">
            <ActionCard
              icon={Receipt}
              title="Electricity Bill Receipts"
              onClick={() => {}}
            />
            <ActionCard
              icon={HelpCircle}
              title="Help & Support"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      <AddBillerDialog 
        open={addBillerOpen} 
        onOpenChange={setAddBillerOpen}
        onAddBiller={setSavedBiller}
      />
      
      <AnimatePresence>
        {showSuccessAnimation && <SuccessAnimation />}
      </AnimatePresence>
      
      <BottomNav />
    </div>
  );
};

export default BillPay;
