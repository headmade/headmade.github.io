page '/index.html', :layout => false
#activate :livereload
configure :build do
  activate :asset_hash
  activate :minify_css
  activate :minify_javascript
end
activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
  deploy.branch = :master
end

after_build do |builder|
  FileUtils.cp_r 'source/downloads/.', 'build'
end
