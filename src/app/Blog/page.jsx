import React from "react";

const Blog = () => {
  return (
    <div className="bg-black text-white py-10 px-6 pt-32">
      <h2 className="text-4xl lg:text-[52px] text-[#db6e3b] font-bold mb-12 text-center">Blogs</h2>

      <div className="max-w-12xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Blog 1 */}
        <div className="bg-[#111] p-6 rounded-lg border border-[#AB572D]">
          <div className="flex items-center">
            <img src="/images/perfume1.webp" className="max-w-48" alt="" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-semibold text-[#AB572D]">
                  Luxurious Elixir
                </div>
              </div>
              <p className="text-[#D1D1D1] text-md mb-4">
                Step into a world of unparalleled opulence with Luxurious
                Elixir, an exquisite fragrance that weaves an enchanting
                symphony of gold and luxury. This gilded elixir is a celebration
                of sophistication, crafted with the finest essences and imbued
                with the allure of precious golden hues.
              </p>
            </div>
          </div>
          <p className="text-[#D1D1D1] text-md">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the world in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance.
          </p>
        </div>

        {/* Blog 2 */}
        <div className="bg-[#111] p-6 rounded-lg border border-[#AB572D]">
          <div className="flex items-center">
            <img src="/images/perfume2.webp" className="max-w-48" alt="" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-semibold text-[#AB572D]">
                  Luxury Enigma
                </div>
              </div>
              <p className="text-[#D1D1D1] text-md mb-4">
                Step into a world of unparalleled opulence with Luxurious
                Elixir, an exquisite fragrance that weaves an enchanting
                symphony of gold and luxury. This gilded elixir is a celebration
                of sophistication, crafted with the finest essences and imbued
                with the allure of precious golden hues.
              </p>
            </div>
          </div>
          <p className="text-[#D1D1D1] text-md">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the world in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
