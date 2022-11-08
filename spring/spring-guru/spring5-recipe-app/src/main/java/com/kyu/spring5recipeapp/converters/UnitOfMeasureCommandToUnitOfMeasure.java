package com.kyu.spring5recipeapp.converters;

import com.kyu.spring5recipeapp.commands.UnitOfMeasureCommand;
import com.kyu.spring5recipeapp.domain.UnitOfMeasure;
import lombok.Synchronized;
import org.springframework.lang.Nullable;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.lang.annotation.Annotation;

@Component
public class UnitOfMeasureCommandToUnitOfMeasure implements Converter<UnitOfMeasureCommand, UnitOfMeasure> {

    @Synchronized
    @Nullable
    @Override
    public UnitOfMeasure convert(UnitOfMeasureCommand source) {
        if (source == null) {
            return null;
        }

        final UnitOfMeasure uom = new UnitOfMeasure();
        uom.setId(source.getId());
        uom.setDescription(source.getDescription());
        return uom;
    }


}
