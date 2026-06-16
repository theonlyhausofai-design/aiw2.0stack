import { motion } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Blog() {
  const { copy, blog_posts } = brandDNA;
  const sec = copy.blog;

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {sec.label && (
            <motion.span
              className="inline-block text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2"
              variants={fadeUp}
            >
              {sec.label}
            </motion.span>
          )}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
            variants={fadeUp}
          >
            {sec.heading}
          </motion.h2>
          {sec.body && (
            <motion.p className="text-base sm:text-lg text-gray-600" variants={fadeUp}>
              {sec.body}
            </motion.p>
          )}
        </motion.div>

        {/* Blog post grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {(blog_posts || []).map((post, i) => (
            <motion.article
              key={i}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-primary"
              variants={fadeUp}
            >
              {/* Thumbnail */}
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    Article image
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {post.category && (
                  <span className="inline-block text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                    {post.category}
                  </span>
                )}

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  <a
                    href={post.href || '#'}
                    className="hover:text-primary transition-colors focus:outline-none"
                  >
                    {post.title}
                  </a>
                </h3>

                {post.excerpt && (
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
                )}

                <div className="flex items-center justify-between text-xs text-gray-400">
                  {post.date && <time>{post.date}</time>}
                  {post.readTime && <span>{post.readTime}</span>}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
