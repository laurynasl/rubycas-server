set :application, "dev.rubycas.exvo.com"
set :repository,  "git@github.com:laurynasl/rubycas-server.git"

role :web, application
role :app, "#{application}"
role :db,  "#{application}", :primary => true


set :scm, :git
set :deploy_via, :remote_cache
set :deploy_to, "/var/www/#{application}"
set :use_sudo, false


after "deploy:update","deploy:bundle"
after "deploy:update","deploy:syncdb"
namespace :deploy do
  set :merb_env,"stagging"
  task :bundle do
    stream "cd #{latest_release}; gem bundle"
  end

  task :syncdb do
    transaction do
       stream "cd #{latest_release}; MERB_ENV=#{merb_env} rake sequel:db:migrate --trace ;"
    end
  end
end

