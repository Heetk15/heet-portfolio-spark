import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ScrollReveal from "@/components/ScrollReveal";

export interface GalleryImage {
  src: string;
  caption: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => (
  <section className="py-20">
    <div className="section-container">
      <ScrollReveal className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Project <span className="text-gradient">Gallery</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
          {images.map((img, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div className="flex-none w-[80vw] sm:w-[400px] snap-center bg-white/5 rounded-xl border border-cyan-400/10 cursor-pointer group hover:border-cyan-400/30 transition-colors overflow-hidden">
                  <div className="overflow-hidden rounded-t-xl">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="aspect-video w-full object-cover rounded-t-xl group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm text-gray-300 font-medium text-center">{img.caption}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-[#020611] border-cyan-400/20 max-w-5xl">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <p className="text-cyan-400 text-lg text-center mt-4">{img.caption}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProjectGallery;
