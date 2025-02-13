import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Cloud, Coins, Leaf, ArrowRight, Home, CreditCard, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Link } from "react-router-dom";

const monthlyData = [
  { month: "Jan", generation: 580 },
  { month: "Feb", generation: 620 },
  { month: "Mar", generation: 750 },
  { month: "Apr", generation: 800 },
  { month: "May", generation: 850 },
  { month: "Jun", generation: 970 },
  { month: "Jul", generation: 920 },
  { month: "Aug", generation: 900 },
  { month: "Sep", generation: 850 },
  { month: "Oct", generation: 780 },
  { month: "Nov", generation: 650 },
  { month: "Dec", generation: 600 }
];

const DashboardCard = ({ 
  title, 
  value, 
  icon: Icon,
  unit,
  className,
  delay = "0" 
}: { 
  title: string; 
  value: string | number;
  icon: React.ComponentType<any>;
  unit: string;
  className?: string;
  delay?: string;
}) => (
  <Card 
    className={cn(
      "relative overflow-hidden transition-all hover:shadow-lg animate-appear-zoom",
      className
    )}
    style={{ animationDelay: delay }}
  >
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className="h-5 w-5" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{unit}</p>
    </CardContent>
  </Card>
);

const ProjectCard = () => (
  <Card className="bg-white/50 backdrop-blur-sm animate-appear-zoom mt-8" style={{ animationDelay: "400ms" }}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0">
      <div>
        <h3 className="font-semibold">Helios 140</h3>
        <p className="text-sm text-muted-foreground">Chennai, Tamil Nadu</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs bg-secondary px-2 py-1 rounded-full">1 Project</span>
        <ArrowRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold mb-1">7.6 kW</div>
      <p className="text-sm text-muted-foreground mb-4">Total Capacity</p>
      
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="colorGeneration" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              tickFormatter={(value) => `${value}kWh`}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Area
              type="monotone"
              dataKey="generation"
              stroke="hsl(var(--primary))"
              fill="url(#colorGeneration)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

const BottomNav = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6">
    <div className="max-w-md mx-auto flex justify-around items-center">
      <Link to="/dashboard" className="flex flex-col items-center gap-1 text-primary">
        <Home className="h-5 w-5" />
        <span className="text-xs">Home</span>
      </Link>
      <Link to="/bill-pay" className="flex flex-col items-center gap-1 text-muted-foreground">
        <CreditCard className="h-5 w-5" />
        <span className="text-xs">Bill Pay</span>
      </Link>
      <button className="flex flex-col items-center gap-1 text-muted-foreground">
        <User className="h-5 w-5" />
        <span className="text-xs">Account</span>
      </button>
    </div>
  </div>
);

const Dashboard = () => {
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
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-3xl font-bold tracking-tight">Welcome 👋</h2>
            <span className="text-sm text-muted-foreground">Since 01/02/24</span>
          </div>
          <p className="text-muted-foreground">Overview of your solar power credits and usage</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <DashboardCard
            title="Capacity Reserved"
            value="7,600"
            unit="W"
            icon={Battery}
            className="bg-gradient-to-br from-yellow-50/50 to-yellow-100/30"
            delay="200ms"
          />
          <DashboardCard
            title="Energy Produced"
            value="970"
            unit="KWh"
            icon={Cloud}
            className="bg-gradient-to-br from-blue-50/50 to-blue-100/30"
            delay="250ms"
          />
          <DashboardCard
            title="Credits Earned"
            value="5,000"
            unit="₹"
            icon={Coins}
            className="bg-gradient-to-br from-purple-50/50 to-purple-100/30"
            delay="300ms"
          />
          <DashboardCard
            title="Carbon Avoided"
            value="873"
            unit="Kgs"
            icon={Leaf}
            className="bg-gradient-to-br from-green-50/50 to-green-100/30"
            delay="350ms"
          />
        </div>

        <ProjectCard />
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Dashboard;
