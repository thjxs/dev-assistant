module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      'prismjs',
      {
        'languages': ['javascript', 'php', 'css', 'cpp', 'bash'],
        'plugins': ['line-numbers'],
        'theme': 'default',
        'css': true
      }
    ]
  ]
}
