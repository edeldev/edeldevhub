import { Fragment } from "react";
import Image from "next/image";
import { WHY_WITH_US } from "@/utils/whyWithUs";
import { IconCircleCheckFilled, IconXboxXFilled } from "@tabler/icons-react";
import LOGO from "@/public/logo-edeldev-dark.webp";

export const WhyWithUs = () => {
  return (
    <Fragment>
      <h2 className="font-semibold text-2xl">¿Por qué trabajar con nostros?</h2>
      <p className="text-sm text-body mt-2 mb-15">
        Ofrecemos más que sólo sitios web: construimos máquinas de crecimiento.
      </p>

      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-5">
          <p className="font-bold md:text-xl">Métrica</p>
        </div>
        <div className="col-span-3 mx-auto">
          <Image src={LOGO} alt="logo" width={100} height={100} />
        </div>
        <div className="col-span-4 text-center">
          <p className="font-semibold text-xs md:text-sm">Otros competidores</p>
        </div>

        {WHY_WITH_US.map((feature) => (
          <Fragment key={feature.id}>
            <div className="col-span-5">
              <div>
                <h4 className="text-sm md:text-base">{feature.title}</h4>
              </div>
              <div>
                <p className="text-body text-xs text-balance">
                  {feature.caption}
                </p>
              </div>
            </div>
            <div className="col-span-3 flex justify-center items-center">
              <IconCircleCheckFilled className="text-[#11EFFE]" />
            </div>
            <div className="col-span-4 flex justify-center items-center">
              <IconXboxXFilled className="text-red-500" />
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};
