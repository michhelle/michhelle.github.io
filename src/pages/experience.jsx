import React from "react";

export default function Experience() {
  return (
    <div class="pl-6">
      <div class="font-bold pb-5 text-violet-300">WORK</div>
      <ul>
        <li>
          <div class="grid grid-cols-2">
            <div>
              <p class="font-semibold">
                toronto metropolitan university - inclusive media and design
                center
              </p>
              <p>android application developer</p>
              <p class="text-gray-400">react native, typescript, mongodb</p>
            </div>
            <div class="grid justify-end content-center ">
              <a
                href="https://www.torontomu.ca/inclusive-media/"
                class="hover:text-violet-300"
              >
                may 2023 - present
              </a>
            </div>
          </div>
        </li>
        <br />
        <li>
          <div class="grid grid-cols-2">
            <div>
              <p class="font-semibold">realm technologies ltd.</p>
              <p>software engineer intern</p>
              <p class="text-gray-400">angular, javascript, mongodb</p>
            </div>
            <div class="grid justify-end content-center ">
              <a
                href="https://therealm.gg/"
                class="grid justify-end content-center hover:text-violet-300"
              >
                may 2022 - august 2022
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div class="font-bold py-5 text-violet-300">PROJECTS</div>
      <ul>
        <li>
          <div class="grid grid-cols-2">
            <div>
              <p class="font-semibold">windows xp clone</p>
              <p class="text-gray-400">react, typescript</p>
            </div>
            <div class="grid justify-end content-center ">
              <a
                href="https://github.com/michhelle/michelle-dev"
                class="grid justify-end content-center hover:text-violet-300"
              >
                github
              </a>
            </div>
          </div>
        </li>
        <br />
        <li>
          <div class="grid grid-cols-2">
            <div>
              <p class="font-semibold">e-commerce website</p>
              <p class="text-gray-400">angular, javascript, php, mysql</p>
            </div>
            <div class="grid justify-end content-center ">
              <a
                href="https://github.com/michhelle/ecommerce-website"
                class="grid justify-end content-center hover:text-violet-300"
              >
                github
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
