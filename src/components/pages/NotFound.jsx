import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 max-w-md"
      >
        {/* 404 Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center">
            <ApperIcon name="AlertTriangle" size={48} className="text-accent" />
          </div>
        </motion.div>

        {/* 404 Text */}
        <div className="space-y-3">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl font-display text-primary font-bold"
          >
            404
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-display text-secondary"
          >
            Page Not Found
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-secondary/70 text-body"
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link to="/">
            <Button className="w-full sm:w-auto">
              <ApperIcon name="Home" size={20} className="mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/search">
            <Button variant="outline" className="w-full sm:w-auto">
              <ApperIcon name="Search" size={20} className="mr-2" />
              Search Products
            </Button>
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="pt-4 border-t border-accent/20"
        >
          <p className="text-sm text-secondary/60 mb-3">Popular Categories:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link 
              to="/category/skincare" 
              className="text-sm text-accent hover:text-primary transition-colors"
            >
              Skincare
            </Link>
            <span className="text-secondary/40">•</span>
            <Link 
              to="/category/makeup" 
              className="text-sm text-accent hover:text-primary transition-colors"
            >
              Makeup
            </Link>
            <span className="text-secondary/40">•</span>
            <Link 
              to="/category/fragrance" 
              className="text-sm text-accent hover:text-primary transition-colors"
            >
              Fragrance
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NotFound;