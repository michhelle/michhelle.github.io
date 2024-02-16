import React from "react";

export default function Contact() {
  return (
    <div>
      <p class="font-semibold pb-5">contact</p>
      <div class="flex">
        <p>email:&nbsp;</p>
        <a
          href="mailto:michellevu0907@gmail.com"
          class="text-gray-500 hover:decoration-violet-300 hover:underline"
        >
          michellevu0907@gmail.com
        </a>
      </div>

      <div class="flex">
        <p>github:&nbsp;</p>
        <a
          href="https://github.com/michhelle"
          class="text-gray-500 hover:decoration-violet-300 hover:underline"
        >
          @michhelle
        </a>
      </div>
      <div class="flex">
        <p>linkedin:&nbsp;</p>
        <a
          href="https://www.linkedin.com/in/michhelle/"
          class="text-gray-500 hover:decoration-violet-300 hover:underline"
        >
          @michhelle
        </a>
      </div>
    </div>
  );
}
