import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <section className="w-full grid place-items-center gap-y-16 px-6 pb-24 pt-20 md:px-12 md:py-32 lg:gap-y-32 lg:px-[116px] lg:py-[120px] bg-white overflow-hidden font-sans">
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[300px] text-center text-4xl font-medium tracking-tight md:max-w-[400px] md:text-[56px] md:leading-[1.1] lg:max-w-none text-slate-900"
      >
        From inspiration to creation.
      </motion.h2>

      <div className="w-full max-w-md grid grid-cols-1 gap-y-20 md:max-w-4xl lg:max-w-7xl lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
        
        {/* Feature 1 */}
        <motion.figure 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:place-items-center md:gap-x-12 md:gap-y-0 lg:grid-cols-1 lg:content-start lg:gap-x-0 lg:gap-y-10"
        >
          <div className="grid aspect-[1.1] w-full place-items-center overflow-hidden rounded-[24px] bg-[#F5F4F0]">
            <video 
              autoPlay 
              muted 
              loop 
              disablePictureInPicture 
              playsInline 
              className="w-full h-full object-cover" 
              poster="https://bytescale.mobbin.com/FW25bBB/image/mobbin.com/prod/assets/file.mp4?enc=1.BQnbdJK6.aS1QH3EpU4iocjzi.Mw_NIjuopRwxbTHn9l8V6QwRlMT8Yn7Ron1H8kb2VIuq97Tv0vHVljLk_YLFs7ywP1AzpMxt9sV5JETDaDHC0cKBFSctCj7Auje4oUTuZtqdmwlK7rCH85KKEHitZ14AuYE2sJvUOcFton3lQ15_fqYLe-D7N7GYTMpyNNQaNgwWPmmk4GD2"
            >
              <source 
                src="https://bytescale.mobbin.com/FW25bBB/video/mobbin.com/prod/assets/file.mp4?enc=1.BQnbdJK6.NGEe6x9i9aOYzTwJ.DK1BKCNO6aQVJATLtV2MuCmrTRrmN6IeXY1MHD5g_TSXfti0oVE0Uxn-SsfdscCUw3P6wmNBksSzSPgNkJYwBlWgIft1ekFhexHCiQB-fTq_rigQuRQCxgKSha-LXmhDrXgTH8mxVkmI4wmRWIP8_R9s57g2zCOvho7ALvbdcv9bYFQBbgCa_J4vk6K40y-j_gJFJPdIiTNje05WZHaEj34Tkrhh1oiVmVhBtR2Yzx5Lgbx9TVd91tUKxT6oevSRYWaiTwnlLbUk77rdjnDqt9ojWbM2v7tIM3-a5G-JNpu-qWT_yjMurZovYbhnkBOSWQ" 
                type="video/mp4" 
              />
            </video>
          </div>
          <figcaption className="text-center lg:mt-2">
            <p className="text-[22px] font-bold tracking-tight text-slate-900">Copy to Figma</p>
            <p className="pt-4 text-[16px] leading-[1.6] text-slate-500">
              <span className="inline-block max-w-[270px]">
                Download designs you like or copy it straight into Figma with our new{' '}
                <a href="#" className="underline transition-opacity hover:opacity-80 font-medium">Figma plugin</a>.
              </span>
            </p>
          </figcaption>
        </motion.figure>

        {/* Feature 2 (Alternates order on medium screens) */}
        <motion.figure 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:place-items-center md:gap-x-12 md:gap-y-0 lg:grid-cols-1 lg:content-start lg:gap-x-0 lg:gap-y-10"
        >
          <div className="grid aspect-[1.1] w-full place-items-center overflow-hidden rounded-[24px] bg-[#F5F4F0] md:order-last lg:order-none">
            <video 
              autoPlay 
              muted 
              loop 
              disablePictureInPicture 
              playsInline 
              className="w-full h-full object-cover" 
              poster="https://bytescale.mobbin.com/FW25bBB/image/mobbin.com/prod/assets/file.mp4?enc=1.BQnbdJK6.W8SSlyrklyZoki9p.jdBDxgr-Yf4yKBq41q9XLezp1G84Mu2jBLvQtXcHjwv66Mrg1jTQBu6AgJjGhQCOv_cMIOsEbrvUHKIz0QRIUEXeggLcOBQF6lrYWoCB3V3VUro7OUfTThtQA65eQzWivKGCRxF1GpnhlF2vNvu8L9HrWK0b-s2OQ6EQEzNTqP8Jpkkyd3nYOx7QzK9A"
            >
              <source 
                src="https://bytescale.mobbin.com/FW25bBB/video/mobbin.com/prod/assets/file.mp4?enc=1.BQnbdJK6.9kH0UglFp7TtiXRV.1UVODMWIhz8S5i1qazUyqCAqQKAfI_-KgUG0dQNbPscKw9lLySH3Gow1rhPyqmXnC80XXuPYEUQfS8BRcdgdDkDX5CKIcCkTO46i1gxtMk7PzKo6w_x7wUICj4axruWL0N0UFYVHlYVU0CdSK9Ks5eAEBqbACpZ2DtM5H8ifavKZSZ-zb6Slnvy7a33lYzWiGb71hzbyJQdIXmFKLznT-BymOXgqRGkTbSvN5slZlFS1ZoXMxKJMgmk6uu1UBODz-sE2OHDKc6oL4rBVhkk7yIz2m7_wyGsGmkMlDMmQfJMJyLrXoNjcQfpggcjAMGDjAKteXZ48GQ" 
                type="video/mp4" 
              />
            </video>
          </div>
          <figcaption className="text-center lg:mt-2">
            <p className="text-[22px] font-bold tracking-tight text-slate-900">Save to collections</p>
            <p className="pt-4 text-[16px] leading-[1.6] text-slate-500">
              <span className="inline-block max-w-[300px]">
                Collect your favorite designs and upload your own screenshots into one place.
              </span>
            </p>
          </figcaption>
        </motion.figure>

        {/* Feature 3 */}
        <motion.figure 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:place-items-center md:gap-x-12 md:gap-y-0 lg:grid-cols-1 lg:content-start lg:gap-x-0 lg:gap-y-10"
        >
          <div className="grid aspect-[1.1] w-full place-items-center overflow-hidden rounded-[24px] bg-[#F5F4F0]">
            {/* Re-using first video as placeholder for broken third video from snippet */}
            <video 
              autoPlay 
              muted 
              loop 
              disablePictureInPicture 
              playsInline 
              className="w-full h-full object-cover" 
              poster="https://bytescale.mobbin.com/FW25bBB/image/mobbin.com/prod/assets/file.mp4?enc=1.BQnbdJK6.kBHrEmYZjwWv8Kft.cFxM6yRHUnnix6o71e84PFyibjX82_DLMglSjCKLaGUaFyvlm4USXwLevNv5MaScaLB__DsPJzL8t00-IjgHJn_dae-gDBnbpV5VN93pJ5E6sTDJFDSnRlm5mV9rhHC8kKYd6VYY7eTo2LRj6EI3Dg9i4lb2NJgs_AcJleFppuHHLg"
            >
              <source 
                src="https://bytescale.mobbin.com/FW25bBB/video/mobbin.com/prod/assets/file.mp4?enc=1.BQnbdJK6.NGEe6x9i9aOYzTwJ.DK1BKCNO6aQVJATLtV2MuCmrTRrmN6IeXY1MHD5g_TSXfti0oVE0Uxn-SsfdscCUw3P6wmNBksSzSPgNkJYwBlWgIft1ekFhexHCiQB-fTq_rigQuRQCxgKSha-LXmhDrXgTH8mxVkmI4wmRWIP8_R9s57g2zCOvho7ALvbdcv9bYFQBbgCa_J4vk6K40y-j_gJFJPdIiTNje05WZHaEj34Tkrhh1oiVmVhBtR2Yzx5Lgbx9TVd91tUKxT6oevSRYWaiTwnlLbUk77rdjnDqt9ojWbM2v7tIM3-a5G-JNpu-qWT_yjMurZovYbhnkBOSWQ" 
                type="video/mp4" 
              />
            </video>
          </div>
          <figcaption className="text-center lg:mt-2">
            <p className="text-[22px] font-bold tracking-tight text-slate-900">Leave comments</p>
            <p className="pt-4 text-[16px] leading-[1.6] text-slate-500">
              <span className="inline-block max-w-[300px]">
                Take notes upon saving so you’ll never forget the context in the future.
              </span>
            </p>
          </figcaption>
        </motion.figure>

      </div>
    </section>
  );
}
