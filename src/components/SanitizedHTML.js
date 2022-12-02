import sanitizeHtml from 'sanitize-html'

const defaultOptions = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a'],
  allowedAttributes: {
    'a': ['href']
  },
  allowedIframeHostnames: ['www.youtube.com']
};

const sanitize = (dirty, options) => ({
    __html: sanitizeHtml(
      dirty,
      { ...defaultOptions, ...options }
    )
  })
;
const SanitizedHTML = ({ html, options, className }) => (
  <div className={className} dangerouslySetInnerHTML={sanitize(html, options)}/>
);

export default SanitizedHTML