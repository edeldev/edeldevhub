"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IFilteredTemplate } from "./types";

export const Template = ({ filteredTemplates }: IFilteredTemplate) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredTemplates.map(
        ({ id, slug, title, img, caption, type, discount, price }) => (
          <Link key={id} href={`/templates/${slug}`}>
            <motion.div
              className="bg-neutral-900 p-5 rounded-2xl flex flex-col justify-between"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div>
                <div className="xl:h-60 mb-4">
                  <Image
                    src={img}
                    alt={caption}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-body">{caption}</p>
              </div>

              <div className="mt-2 text-right text-sm font-medium">
                {type === "pago" ? (
                  <>
                    {discount && (
                      <span className="line-through text-gray-400 mr-2">
                        {discount}
                      </span>
                    )}
                    <span className="text-green-600">{price}</span>
                  </>
                ) : (
                  <span className="text-blue-500">Gratis</span>
                )}
              </div>
            </motion.div>
          </Link>
        )
      )}
    </div>
  );
};
