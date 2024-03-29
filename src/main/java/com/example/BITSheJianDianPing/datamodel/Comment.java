package com.example.BITSheJianDianPing.datamodel;

public class Comment {

    private Integer dishid;
    private String dishname;
    private Integer id;
    private String name;
    private String comment;
    private String photo;
    private String datetime;

    public Integer getDishid() {
        return dishid;
    }

    public void setDishid(Integer dishid) {
        this.dishid = dishid;
    }

    public Comment(Integer dishid , String dishname, Integer id, String name, String comment, String photo, String datetime) {
        this.dishid=dishid;
        this.dishname = dishname;
        this.id = id;
        this.name = name;
        this.comment = comment;
        this.photo = photo;
        this.datetime = datetime;
    }

    public String getDishname() {
        return dishname;
    }

    public void setDishname(String dishname) {
        this.dishname = dishname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void printf()
    {
        System.out.println("dishname:"+dishname);
        System.out.println("id:"+id);
        System.out.println("name:"+name);
        System.out.println("comment:"+comment);
        System.out.println("photo:"+photo);
        System.out.println("datetime:"+datetime);
    }
}
