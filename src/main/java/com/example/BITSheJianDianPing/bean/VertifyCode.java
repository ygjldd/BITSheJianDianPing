package com.example.BITSheJianDianPing.bean;



public class VertifyCode {
    private String code;

    public VertifyCode() {
    }

    public VertifyCode(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return "VertifyCode{" +
                "code='" + code + '\'' +
                '}';
    }
}
