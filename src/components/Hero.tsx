import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100/50 to-white"
    >
      {/* Content Container */}
      <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium"
          >
            Live in Tamil Nadu
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
          >
            Solar Power Without Panels
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Reserve solar farm capacity and save on electricity bills. No installation needed.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Button 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              Reserve Your Share
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-orange-200 text-orange-700 hover:bg-orange-50"
            >
              How It Works
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Illustration Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-64 sm:h-72 md:h-96"
      >
        {/* Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-100/50 via-orange-50/20 to-transparent" />
        
        {/* City Illustration */}
        <div className="absolute bottom-0 left-0 right-0 h-full bg-[url('/city-illustration.svg')] bg-bottom bg-repeat-x bg-contain" />
      </motion.div>

      {/* Animated Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-orange-400/20 blur-3xl rounded-full opacity-50" />
    </motion.div>
  );
};

export default Hero;