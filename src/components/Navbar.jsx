const Navbar = () => {
    return (
      <div className="w-[calc(100vw-var(--spacing)*64)] h-16 bg-white shadow fixed top-0 left-64 flex justify-between items-center px-6 z-1000">
        <h1 className="font-[500] text-[24px] leading-[38px] tracking-[0%] font-semibold">Dashboard</h1>
        <p className="font-[400] text-[16px] text-[#121927] leading-[16.8px] tracking-[0%]">admin</p>
      </div>
    );
  };
  
  export default Navbar;
  