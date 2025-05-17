import React from 'react';
import { Container } from '../shared/container';
import { Title } from '../shared/title';
import Link from 'next/link';

interface Props {
  className?: string;
}

interface NavList {
  href: string;
  label: string;
}

const navLists: NavList[] = [
  { href: '/instruction', label: 'Инструкция для новичков' },
  { href: '/rulesite', label: 'Правила сайта' },
  { href: '/policy', label: 'Политика конфиденциальности' },
  { href: '/offer', label: 'Договор оферты' },
];

export const Section: React.FC<Props> = ({ className }) => {
  return (
    <Container className='py-10'>
      <Title text="Важная информация:" size="lg" className="font-bold text-gray-900" />
      <ul className="inline-flex gap-5 pt-5">
            {navLists.map(({ href, label }) => (
              <Link key={href} href={href}>
              <li  className='bg-red-600 py-3 px-5 rounded-xl text-lg font-semibold text-white hover:bg-red-700'>
                {label}
              </li>
              </Link>
            ))}
      </ul>
      <Title text="Новости сайта:" size="lg" className="font-bold text-gray-900 py-10" />
      <div className="flex gap-1 justify-start justify-items-start content-center">
        <span>06.05.2025</span>
        <ul>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste atque sint necessitatibus totam distinctio perspiciatis soluta, assumenda vero pariatur dolorem ex, aspernatur, accusantium vel. Molestias sit quibusdam eius ad distinctio!
          Quia eveniet ipsam velit inventore, unde temporibus eligendi ducimus quisquam alias nisi distinctio eius ex suscipit quae voluptas aut enim aliquam. Fugit commodi repellat alias cum fuga, illum atque ad.
          Magni sint nobis excepturi atque, rem officiis soluta illum tempore exercitationem perferendis repudiandae eos assumenda recusandae nesciunt id? Enim porro, non eveniet aspernatur ad laborum aut distinctio similique! Quae, quaerat!
          Officiis officia temporibus, totam non, laudantium, est itaque iusto laborum debitis velit consequatur earum ducimus! Sapiente distinctio tempora beatae officiis nihil cupiditate accusantium quia architecto eveniet, voluptas id totam praesentium?
          Eligendi, minima, magnam iste ex magni error in officia, soluta veritatis eum quas itaque consequatur! Illum et dicta, sequi hic aliquam eligendi officia! Aliquid nulla quod odit quas incidunt quidem.
          Accusamus repellat natus a amet beatae, nostrum doloremque, ad rem deserunt id nisi rerum reprehenderit. Impedit numquam id vero molestias minima! Atque odit placeat quod libero sunt molestias similique fugiat.
          Asperiores error accusantium minus earum mollitia tempore soluta alias accusamus. Officiis velit voluptates quis provident pariatur facere, enim aliquam inventore praesentium necessitatibus vitae commodi eligendi beatae voluptate nulla delectus quaerat?
          Ducimus quam reiciendis libero delectus asperiores, laboriosam repudiandae ea repellat. Atque possimus, at enim ab quis nulla hic, itaque non amet earum alias. Odio, non! Velit quas ea possimus deserunt?
          Commodi eum fuga quis quod et ea ab quisquam cum officia tenetur amet deserunt minima ducimus, explicabo perspiciatis optio beatae quam accusantium temporibus obcaecati eaque provident animi dignissimos. In, quod.
          Similique dolor doloribus nulla optio, officia vitae possimus quaerat facilis itaque quos cum! Corporis, repudiandae? Aliquam voluptatem, laboriosam, ad a cumque deserunt numquam nobis, quae ab recusandae ratione tenetur laborum!</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste atque sint necessitatibus totam distinctio perspiciatis soluta, assumenda vero pariatur dolorem ex, aspernatur, accusantium vel. Molestias sit quibusdam eius ad distinctio!
          Quia eveniet ipsam velit inventore, unde temporibus eligendi ducimus quisquam alias nisi distinctio eius ex suscipit quae voluptas aut enim aliquam. Fugit commodi repellat alias cum fuga, illum atque ad.
          Magni sint nobis excepturi atque, rem officiis soluta illum tempore exercitationem perferendis repudiandae eos assumenda recusandae nesciunt id? Enim porro, non eveniet aspernatur ad laborum aut distinctio similique! Quae, quaerat!
          Officiis officia temporibus, totam non, laudantium, est itaque iusto laborum debitis velit consequatur earum ducimus! Sapiente distinctio tempora beatae officiis nihil cupiditate accusantium quia architecto eveniet, voluptas id totam praesentium?
          Eligendi, minima, magnam iste ex magni error in officia, soluta veritatis eum quas itaque consequatur! Illum et dicta, sequi hic aliquam eligendi officia! Aliquid nulla quod odit quas incidunt quidem.
          Accusamus repellat natus a amet beatae, nostrum doloremque, ad rem deserunt id nisi rerum reprehenderit. Impedit numquam id vero molestias minima! Atque odit placeat quod libero sunt molestias similique fugiat.
          Asperiores error accusantium minus earum mollitia tempore soluta alias accusamus. Officiis velit voluptates quis provident pariatur facere, enim aliquam inventore praesentium necessitatibus vitae commodi eligendi beatae voluptate nulla delectus quaerat?
          Ducimus quam reiciendis libero delectus asperiores, laboriosam repudiandae ea repellat. Atque possimus, at enim ab quis nulla hic, itaque non amet earum alias. Odio, non! Velit quas ea possimus deserunt?
          Commodi eum fuga quis quod et ea ab quisquam cum officia tenetur amet deserunt minima ducimus, explicabo perspiciatis optio beatae quam accusantium temporibus obcaecati eaque provident animi dignissimos. In, quod.
          Similique dolor doloribus nulla optio, officia vitae possimus quaerat facilis itaque quos cum! Corporis, repudiandae? Aliquam voluptatem, laboriosam, ad a cumque deserunt numquam nobis, quae ab recusandae ratione tenetur laborum!</li>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste atque sint necessitatibus totam distinctio perspiciatis soluta, assumenda vero pariatur dolorem ex, aspernatur, accusantium vel. Molestias sit quibusdam eius ad distinctio!
          Quia eveniet ipsam velit inventore, unde temporibus eligendi ducimus quisquam alias nisi distinctio eius ex suscipit quae voluptas aut enim aliquam. Fugit commodi repellat alias cum fuga, illum atque ad.
          Magni sint nobis excepturi atque, rem officiis soluta illum tempore exercitationem perferendis repudiandae eos assumenda recusandae nesciunt id? Enim porro, non eveniet aspernatur ad laborum aut distinctio similique! Quae, quaerat!
          Officiis officia temporibus, totam non, laudantium, est itaque iusto laborum debitis velit consequatur earum ducimus! Sapiente distinctio tempora beatae officiis nihil cupiditate accusantium quia architecto eveniet, voluptas id totam praesentium?
          Eligendi, minima, magnam iste ex magni error in officia, soluta veritatis eum quas itaque consequatur! Illum et dicta, sequi hic aliquam eligendi officia! Aliquid nulla quod odit quas incidunt quidem.
          Accusamus repellat natus a amet beatae, nostrum doloremque, ad rem deserunt id nisi rerum reprehenderit. Impedit numquam id vero molestias minima! Atque odit placeat quod libero sunt molestias similique fugiat.
          Asperiores error accusantium minus earum mollitia tempore soluta alias accusamus. Officiis velit voluptates quis provident pariatur facere, enim aliquam inventore praesentium necessitatibus vitae commodi eligendi beatae voluptate nulla delectus quaerat?
          Ducimus quam reiciendis libero delectus asperiores, laboriosam repudiandae ea repellat. Atque possimus, at enim ab quis nulla hic, itaque non amet earum alias. Odio, non! Velit quas ea possimus deserunt?
          Commodi eum fuga quis quod et ea ab quisquam cum officia tenetur amet deserunt minima ducimus, explicabo perspiciatis optio beatae quam accusantium temporibus obcaecati eaque provident animi dignissimos. In, quod.
          Similique dolor doloribus nulla optio, officia vitae possimus quaerat facilis itaque quos cum! Corporis, repudiandae? Aliquam voluptatem, laboriosam, ad a cumque deserunt numquam nobis, quae ab recusandae ratione tenetur laborum!</li>
        </ul>
      </div>
    </Container>
  );
};