import React from "react";
import SectionHeading from './../Utility Components/SectionHeading';
import CounterBox from './../Utility Components/CounterBox';

/**
 * Reusable info-image-metrics section.
 * @param imageSrc        left image url
 * @param imgAlt          img alt
 * @param heading         heading text (JSX allowed)
 * @param description     secondary heading/short intro
 * @param text            base description paragraph
 * @param stats           array of { count, label }
 * @param reverse         swaps image and content sides (boolean)
 */
function InfoImageMetricsSection({
  imageSrc,
  imgAlt = "",
  heading,
  description,
  text,
  stats = [],
  reverse = false,
  imgClass = "rounded-2xl w-full h-auto object-cover",
  className = "",
  children, // additional content below stats if needed
}) {
  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-2 gap-20 items-start ${className}`}
    >
      {/* image/content order based on reverse prop */}
      {reverse ? (
        <>
          <div>
            <SectionHeading>{heading}</SectionHeading>
            {description && (
              <h3 className="text-lg font-medium mb-3">{description}</h3>
            )}
            <p className="text-base text-gray-700 mb-6">{text}</p>
            {stats && (
              <div className="grid grid-cols-3 gap-6 mb-4">
                {stats.map((stat, idx) => (
                  <CounterBox key={idx} count={stat.count} label={stat.label} />
                ))}
              </div>
            )}
            {children}
          </div>
          <img src={imageSrc} alt={imgAlt} className={imgClass} />
        </>
      ) : (
        <>
          <img src={imageSrc} alt={imgAlt} className={imgClass} />
          <div>
            <SectionHeading>{heading}</SectionHeading>
            {description && (
              <h3 className="text-lg font-medium mb-3">{description}</h3>
            )}
            <p className="text-base text-gray-700 mb-6">{text}</p>
            {stats && (
              <div className="grid grid-cols-3 gap-6 mb-4">
                {stats.map((stat, idx) => (
                  <CounterBox key={idx} count={stat.count} label={stat.label} />
                ))}
              </div>
            )}{" "}
            {children}
          </div>
        </>
      )}
    </section>
  );
}

export default InfoImageMetricsSection;
