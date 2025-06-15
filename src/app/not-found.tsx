import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="size-full flex">
      <div className="max-w-prose m-auto p-6">
        <h1 className="text-5xl font-bold text-center mb-4"><span className="text-7xl">404</span> помилка </h1>
        <p className="text-4xl text-center mb-6">Координати не визначено</p>
        <p className="text-lg mb-4">
          Скоріш за все, ця сторінка ніколи не існувала, або втратила
          актуальність і ми її видалили.
        </p>
        <p className="text-lg mb-8">
          Таке буває, не засмучуйтесь. На{" "}
          <Link href="/" className="text-accent underline">
            головній
          </Link>{" "}
          ще є сторінки не гірші за цю.
        </p>
        <p className="text-lg">
          Поскаржитись можна сюди →{" "}
          <a href="mailto:help@usenko.pp.ua" className="underline">
            help@usenko.pp.ua
          </a>
        </p>
      </div>
    </div>
  );
}
