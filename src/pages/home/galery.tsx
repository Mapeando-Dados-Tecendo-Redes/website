import { Card, CardContent } from "@/components/ui/card";
import img from "../../assets/img.jpg";
import img1 from "../../assets/img_1.jpg";
import img2 from "../../assets/img_2.jpg";
import img3 from "../../assets/img_3.jpg";
import img4 from "../../assets/img_4.jpg";
import img5 from "../../assets/img_5.jpg";

const images = [
  { src: img, alt: "Imagem 1" },
  { src: img1, alt: "Imagem 2" },
  { src: img2, alt: "Imagem 3" },
  { src: img3, alt: "Imagem 4" },
  { src: img4, alt: "Imagem 5" },
  { src: img5, alt: "Imagem 6" },
];

export function ImageGallery() {
  return (
    <section className="px-4 py-12 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <Card key={index} className="aspect-[4/3] overflow-hidden">
              <CardContent className="h-full p-0">
                <div className="relative h-full w-full">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
