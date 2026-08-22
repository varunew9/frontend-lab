import { FolderRoot, Link } from "lucide-react";
import { Button, Heading, Section } from "../../../components/ui";

export function ShoppingCart() {
  return (
    <>
      <Section id="hero">
        <div className="mt-2 text-center">
          <Heading element="span" variant="badge">
            React State Management
          </Heading>

          <Heading element="h1">
            Shopping <span>Cart</span>
          </Heading>

          <div className="d-flex gap-2 justify-center">
            <Button variant="primary" className="px-4 py-3" onClick={() => (window.location.href = "https://varunverma-shopnest.netlify.app/")}>
              <Link />
              Live Demo
              {/* <CircleArrowRight /> */}
            </Button>

            <Button variant="outline" className="px-4 py-3" onClick={() => (window.location.href = "https://github.com/varunew9/ShopNest-E-Commerce-Web-Application")}>
              <FolderRoot />
              Git
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
