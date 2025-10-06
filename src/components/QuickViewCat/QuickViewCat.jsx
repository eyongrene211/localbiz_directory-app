import Link from "next/link";

const QuickViewCat = ({ label, icon, href }) => {
  return (
    <Link href={href} className="group">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-full flex justify-center items-center text-gray-700 dark:text-gray-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer mx-auto">
        {icon}
      </div>
      <div className="mt-2 text-center text-xs sm:text-sm text-gray-200 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {label}
      </div>
    </Link>
  );
};

export default QuickViewCat;
