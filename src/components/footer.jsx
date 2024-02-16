import React from "react";

export default function Footer() {
    return (
      <div>
        <div class="flex justify-center">
          <a class="px-1" href="https://www.linkedin.com/in/michhelle/">
            <img src="/linkedin.png" alt="linkedin" class="h-6 w-6" />
          </a>

          <a class="px-1" href="https://www.github.com/michhelle/">
            <img src="/github.png" alt="github" class="h-6 w-6" />
          </a>
        </div>
        <p class=" pt-1 text-center text-gray-500 text-xs">
          &copy; 2024 michelle vu. all rights reserved.
        </p>
      </div>
    );
    }