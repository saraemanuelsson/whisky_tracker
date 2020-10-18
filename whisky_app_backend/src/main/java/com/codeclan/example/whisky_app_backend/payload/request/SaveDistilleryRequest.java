package com.codeclan.example.whisky_app_backend.payload.request;

import com.codeclan.example.whisky_app_backend.models.ERegions;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SaveDistilleryRequest {

    @NotBlank
    @Size(min = 3, max = 20)
    private String name;

    @NotBlank
    @Size(min = 3, max = 20)
    private String region;

    @NotBlank
    @Size(min = 2, max = 50)
    private double[] location;

    public String getName() {
        return name;
    }

    public ERegions getRegion() {
        return ERegions.valueOfLabel(region);
    }

    public double[] getLocation() {
        return location;
    }

//    public ERegions getRegionEnum() {
//        if (region == "Highlands") {
//            return ERegions.HIGHLANDS;
//        } else if (region == "Lowland") {
//            return ERegions.LOWLAND;
//        } else if (region == "Speyside") {
//            return ERegions.SPEYSIDE;
//        } else if (region == "Islands") {
//            return ERegions.ISLANDS;
//        } else if (region == "Campbeltown") {
//            return ERegions.CAMPBElTOWN;
//        } else {
//            return ERegions.ISLAY;
//        }
//    }
}
