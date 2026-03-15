import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import mark from 'markdown-it-mark';
import ins from 'markdown-it-ins';
import markdownItTaskLists from 'markdown-it-task-lists';
import container from 'markdown-it-container';
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
md.use(ins);
md.use(markdownItTaskLists);
md.use(container, 'dropcap', { 
    marker: '↓' ,
    render: function (tokens, idx) { 
        if (tokens[idx].nesting === 1) { 
            return '<div class="bd-dropcap">';
        } else { 
            return '</div>\n';
        }
    }

});
md.use(anchor, {
    permalink: false, // 我们不需要在标题后显示链接符号
    slugify: (s) => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-')) 
    // 确保中文标题也能生成合法的 ID
});

// 自定义规则
md.renderer.rules.strong_open = () => '<strong><span>';
md.renderer.rules.strong_close = () => '</span></strong>';

md.renderer.rules.ins_open = () => '<u><span>';
md.renderer.rules.ins_close = () => '</span></u>';

const defaultRender = md.renderer.rules.image || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
};

md.renderer.rules.image = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    token.attrSet('loading', 'lazy');
    const srcIndex = token.attrIndex('src');
    const url = token.attrs[srcIndex][1];
    const caption = md.utils.escapeHtml(token.content); // 提取 alt 文字作为说明

    // 返回带有 figure 和 figcaption 的结构
    return `
        <figure class="bd-md-figure">
            <img src="${url}" alt="${caption}" />
            <figcaption class="bd-md-caption">${caption}</figcaption>
        </figure>
    `.trim();
};

export default md;