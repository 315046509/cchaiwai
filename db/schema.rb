# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140818165803) do

  create_table "announcements", force: true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "ckeditor_assets", force: true do |t|
    t.string   "data_file_name",               null: false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.integer  "assetable_id"
    t.string   "assetable_type",    limit: 30
    t.string   "type",              limit: 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ckeditor_assets", ["assetable_type", "assetable_id"], name: "idx_ckeditor_assetable", using: :btree
  add_index "ckeditor_assets", ["assetable_type", "type", "assetable_id"], name: "idx_ckeditor_assetable_type", using: :btree

  create_table "gangaos", force: true do |t|
    t.string   "title"
    t.integer  "price"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "avatar1_file_name"
    t.string   "avatar1_content_type"
    t.integer  "avatar1_file_size"
    t.datetime "avatar1_updated_at"
    t.text     "description"
    t.text     "xingcheng"
    t.text     "feiyongshuoming"
    t.text     "wenxintishi"
    t.text     "yudingtishi"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "members", force: true do |t|
    t.string   "name"
    t.string   "mobile"
    t.string   "email"
    t.string   "passwd"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "visas", force: true do |t|
    t.string   "title"
    t.integer  "price"
    t.string   "bianhao"
    t.string   "leixing"
    t.string   "banlishijian"
    t.string   "mianshi"
    t.string   "youxiaoqi"
    t.string   "rujingcishu"
    t.string   "zuichangshijian"
    t.text     "shoukefanwei"
    t.text     "description"
    t.integer  "question_category_id", default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
