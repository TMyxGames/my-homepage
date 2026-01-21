import MarkdownIt from 'markdown-it';
import mark from 'markdown-it-mark';
import markdownItTaskLists from 'markdown-it-task-lists';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
        try {
            // 使用 highlight.js 染色
            return '<pre class="hljs"><code>' +
                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                '</code></pre>';
        } catch (__) {}
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    },

});
md.use(mark);
md.use(markdownItTaskLists);

export default md;