<template>
  <div class="rich-text-editor">
    <!-- Toolbar -->
    <div v-if="editor" class="toolbar bg-gray-50 border border-gray-200 rounded-t-xl p-3 flex flex-wrap gap-2">
      
      <!-- Text Formatting -->
      <div class="toolbar-group flex gap-1 border-r border-gray-300 pr-2">
        <button
          @click="editor.chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
          class="toolbar-btn"
          type="button"
          title="Bold"
        >
          <span class="font-bold">B</span>
        </button>
        
        <button
          @click="editor.chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
          class="toolbar-btn"
          type="button"
          title="Italic"
        >
          <span class="italic">I</span>
        </button>
        
        <button
          @click="editor.chain().focus().toggleUnderline().run()"
          :class="{ 'is-active': editor.isActive('underline') }"
          class="toolbar-btn"
          type="button"
          title="Underline"
        >
          <span class="underline">U</span>
        </button>
        
        <button
          @click="editor.chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
          class="toolbar-btn"
          type="button"
          title="Strikethrough"
        >
          <span class="line-through">S</span>
        </button>
      </div>

      <!-- Headings -->
      <div class="toolbar-group flex gap-1 border-r border-gray-300 pr-2">
        <button
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          class="toolbar-btn"
          type="button"
          title="Heading 1"
        >
          H1
        </button>
        
        <button
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          class="toolbar-btn"
          type="button"
          title="Heading 2"
        >
          H2
        </button>
        
        <button
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          class="toolbar-btn"
          type="button"
          title="Heading 3"
        >
          H3
        </button>
      </div>

      <!-- Lists -->
      <div class="toolbar-group flex gap-1 border-r border-gray-300 pr-2">
        <button
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          class="toolbar-btn"
          type="button"
          title="Bullet List"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <button
          @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          class="toolbar-btn"
          type="button"
          title="Numbered List"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5h12M9 12h12M9 19h12M5 5v14" />
          </svg>
        </button>
      </div>

      <!-- Alignment -->
      <div class="toolbar-group flex gap-1 border-r border-gray-300 pr-2">
        <button
          @click="editor.chain().focus().setTextAlign('left').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
          class="toolbar-btn"
          type="button"
          title="Align Left"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h16" />
          </svg>
        </button>
        
        <button
          @click="editor.chain().focus().setTextAlign('center').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
          class="toolbar-btn"
          type="button"
          title="Align Center"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M7 12h10M4 18h16" />
          </svg>
        </button>
        
        <button
          @click="editor.chain().focus().setTextAlign('right').run()"
          :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
          class="toolbar-btn"
          type="button"
          title="Align Right"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M10 12h10M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Link -->
      <div class="toolbar-group flex gap-1 border-r border-gray-300 pr-2">
        <button
          @click="setLink"
          :class="{ 'is-active': editor.isActive('link') }"
          class="toolbar-btn"
          type="button"
          title="Add Link"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </button>
      </div>

      <!-- Blockquote -->
      <div class="toolbar-group flex gap-1 border-r border-gray-300 pr-2">
        <button
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          class="toolbar-btn"
          type="button"
          title="Blockquote"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </button>
        
        <button
          @click="editor.chain().focus().toggleCodeBlock().run()"
          :class="{ 'is-active': editor.isActive('codeBlock') }"
          class="toolbar-btn"
          type="button"
          title="Code Block"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </button>
      </div>

      <!-- Horizontal Rule -->
      <div class="toolbar-group flex gap-1">
        <button
          @click="editor.chain().focus().setHorizontalRule().run()"
          class="toolbar-btn"
          type="button"
          title="Horizontal Line"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Editor Content -->
    <editor-content 
      :editor="editor" 
      class="editor-content bg-white border border-gray-200 border-t-0 rounded-b-xl p-6 min-h-[400px] prose prose-lg max-w-none focus:outline-none"
    />
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Underline,
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        class: 'text-red-600 underline hover:text-red-700'
      }
    }),
    Image,
    TextAlign.configure({
      types: ['heading', 'paragraph']
    })
  ],
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  },
  editorProps: {
    attributes: {
      class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px]'
    }
  }
})

// Watch for external changes to modelValue
watch(() => props.modelValue, (value) => {
  const isSame = editor.value?.getHTML() === value
  if (!isSame && editor.value) {
    editor.value.commands.setContent(value, false)
  }
})

// Link functionality
const setLink = () => {
  if (!editor.value) return
  
  const previousUrl = editor.value.getAttributes('link').href
  const url = window.prompt('Enter URL', previousUrl)

  if (url === null) return

  if (url === '') {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
    return
  }

  editor.value.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}

// Cleanup on unmount
onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>


<style scoped>
/* Toolbar Buttons - Using Regular CSS instead of @apply */
.toolbar-btn {
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
}

.toolbar-btn:hover {
  background-color: #e5e7eb;
  color: #000000;
}

.toolbar-btn.is-active {
  background-color: #dc2626;
  color: #ffffff;
}

.toolbar-btn.is-active:hover {
  background-color: #b91c1c;
}

.toolbar-group {
  display: flex;
  align-items: center;
}

/* Editor Content Styling */
:deep(.ProseMirror) {
  outline: none;
  font-family: 'Georgia', serif;
  font-size: 1.125rem;
  line-height: 1.75;
  color: #374151;
}

:deep(.ProseMirror p) {
  margin-bottom: 1.5rem;
}

:deep(.ProseMirror h1) {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
  margin-top: 2rem;
  color: #111827;
}

:deep(.ProseMirror h2) {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;
  color: #111827;
}

:deep(.ProseMirror h3) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 1.25rem;
  color: #111827;
}

:deep(.ProseMirror blockquote) {
  border-left: 4px solid #dc2626;
  padding-left: 1.5rem;
  font-style: italic;
  color: #6b7280;
  margin: 1.5rem 0;
}

:deep(.ProseMirror code) {
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-family: 'Monaco', 'Courier New', monospace;
}

:deep(.ProseMirror pre) {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

:deep(.ProseMirror pre code) {
  background: none;
  color: inherit;
  padding: 0;
}

:deep(.ProseMirror ul),
:deep(.ProseMirror ol) {
  padding-left: 1.5rem;
  margin: 1rem 0;
}

:deep(.ProseMirror li) {
  margin-bottom: 0.5rem;
}

:deep(.ProseMirror hr) {
  border: none;
  border-top: 2px solid #e5e7eb;
  margin: 2rem 0;
}

:deep(.ProseMirror a) {
  color: #dc2626;
  text-decoration: underline;
}

:deep(.ProseMirror a:hover) {
  color: #b91c1c;
}
</style>