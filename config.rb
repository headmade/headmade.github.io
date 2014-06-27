#activate :livereload
activate :asset_hash
activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
  deploy.branch = :master
end

