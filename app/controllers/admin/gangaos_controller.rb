class Admin::GangaosController < Admin::MainController
  layout 'admin'
  def index
    @gangaos = Gangao.order_ct_desc.page(params[:page]).per(10)
  end

  def new
    @gangao = Gangao.new
  end

  def create
    if request.post?
      if params[:gangao]
        avatar = params[:gangao][:avatar]
        avatar1 = params[:gangao][:avatar1]
        title = params[:gangao][:title]
        description = params[:gangao][:description]
        price = params[:gangao][:price]
        xingcheng = params[:gangao][:xingcheng]
        feiyongshuoming = params[:gangao][:feiyongshuoming]
        wenxintishi = params[:gangao][:wenxintishi]
        yudingtishi = params[:gangao][:yudingtishi]
        imagename = avatar.original_filename
        avatar.original_filename = Time.now.strftime("%Y%m%d%h%m%s")<<rand(99999).to_s<<imagename[imagename.length-4, 4]
        avatar1.original_filename = Time.now.strftime("%Y%m%d%h%m%s")<<rand(99999).to_s<<imagename[imagename.length-4, 4]
        if !avatar.blank? && !avatar1.blank? && !title.blank? && !description.blank? && !price.blank? && !xingcheng.blank? && !feiyongshuoming.blank? && !wenxintishi.blank? && !yudingtishi.blank?
          rc = Gangao.create(
              :avatar => avatar,
              :avatar1 => avatar1,
              :title => title,
              :description => description,
              :price => price,
              :xingcheng => xingcheng,
              :feiyongshuoming => feiyongshuoming,
              :wenxintishi => wenxintishi,
              :yudingtishi => yudingtishi
          )
          if rc.valid?
          else
            flash[:note]="创建成功！"
            redirect_to :back and return
          end
          redirect_to admin_gangaos_path and return
        else
          flash[:note]="添加失败，请检查添加项是否有空值！"
          redirect_to :back
        end
      end
    end
  end

  def show
    @hotline = Gangao.find params[:id]
  end

  # delete
  def destroy
    @gangao = Gangao.find(params[:id])
    @gangao.destroy
    respond_to do |r|
      r.html do
        redirect_to admin_gangaos_path
        return
      end
    end
  end

  private
  def set_get_resource
    @gangao = Gangao.find(params[:id])
  end
end
