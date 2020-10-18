package com.codeclan.example.whisky_app_backend.models;

public enum ERegions {

    HIGHLANDS("Highlands"),
    LOWLAND("Lowland"),
    SPEYSIDE("Speyside"),
    ISLANDS("Islands"),
    CAMPBElTOWN("Campbeltown"),
    ISLAY("Islay");

    private final String region;

    ERegions(String region) {
        this.region = region;
    }

    public String getRegion() {
        return this.region;
    }

    public static ERegions valueOfLabel(String label) {
        for (ERegions eRegion: values()) {
            if (eRegion.region.equals(label)) {
                return eRegion;
            }
        }
        return null;
    }

}
