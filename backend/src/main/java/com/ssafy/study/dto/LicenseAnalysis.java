package com.ssafy.study.dto;

import com.ssafy.study.model.License;

public class LicenseAnalysis {
    private License passLicense;
    private int passNumber;
    private int passTotal;
    private License doingLicense;
    private int doingNumber;
    private int doingTotal;
    private License todoLicense;
    private int todoNumber;
    private int todoTotal;

    public static class Builder{
        private License passLicense=null;
        private int passNumber=0;
        private int passTotal=0;
        private License doingLicense=null;
        private int doingNumber=0;
        private int doingTotal=0;
        private License todoLicense=null;
        private int todoNumber=0;
        private int todoTotal=0;

        public Builder(){

        }
        public Builder passLicense(License passLicense){
            this.passLicense=passLicense;
            return this;
        }
        public Builder passNumber(int passNumber){
            this.passNumber=passNumber;
            return this;
        }
        public Builder passTotal(int passTotal){
            this.passTotal=passTotal;
            return this;
        }
        public Builder doingLicense(License doingLicense){
            this.doingLicense=doingLicense;
            return this;
        }
        public Builder doingNumber(int doingNumber){
            this.doingNumber=doingNumber;
            return this;
        }
        public Builder doingTotal(int doingTotal){
            this.doingTotal=doingTotal;
            return this;
        }
        public Builder todoLicense(License todoLicense){
            this.todoLicense=todoLicense;
            return this;
        }
        public Builder todoNumber(int todoNumber){
            this.todoNumber=todoNumber;
            return this;
        }
        public Builder todoTotal(int todoTotal){
            this.todoTotal=todoTotal;
            return this;
        }
        public LicenseAnalysis build(){
            return new LicenseAnalysis(this);
        }
    }
    public LicenseAnalysis(Builder builder){
        passLicense = builder.passLicense;
        passNumber = builder.passNumber;
        passTotal = builder.passTotal;
        doingLicense = builder.doingLicense;
        doingNumber = builder.doingNumber;
        doingTotal = builder.doingTotal;
        todoLicense = builder.todoLicense;
        todoNumber = builder.todoNumber;
        todoTotal = builder.todoTotal;
    }
}
