# struct AttributeLinearInterpolationImpl

```cpp
Defined at ../../include/geode/image/core/greyscale_color.h#100
```

## Functions

### compute

```cpp
public GreyscaleColor compute(const AttributeLinearInterpolation & interpolator, const Attribute<GreyscaleColor> & attribute)
```

```cpp
Defined at ../../include/geode/image/core/greyscale_color.h#104
```



# struct AttributeLinearInterpolationImpl

```cpp
Defined at ../../include/geode/basic/attribute_utils.h#134
```

## Functions

### compute

```cpp
public double compute(const AttributeLinearInterpolation & interpolator, const Attribute<double> & attribute)
```

```cpp
Defined at ../../include/geode/basic/attribute_utils.h#134
```



# struct AttributeLinearInterpolationImpl

```cpp
Defined at ../../include/geode/geometry/point.h#193
```

## Functions

### compute

```cpp
public Point<dimension> compute(const AttributeLinearInterpolation & interpolator, const Attribute<Point<dimension> > & attribute)
```

```cpp
Defined at ../../include/geode/geometry/point.h#197
```



# struct AttributeLinearInterpolationImpl

```cpp
Defined at ../../include/geode/image/core/rgb_color.h#142
```

## Functions

### compute

```cpp
public RGBColor compute(const AttributeLinearInterpolation & interpolator, const Attribute<RGBColor> & attribute)
```

```cpp
Defined at ../../include/geode/image/core/rgb_color.h#146
```



# struct AttributeLinearInterpolationImpl

```cpp
Defined at ../../include/geode/basic/attribute_utils.h#82
```

 Helper struct to interpolate an Attribute value. This struct may be customized for a given type. Example: template <> struct AttributeLinearInterpolationImpl< MyType > {     template < template < typename > class Attribute >     static MyType compute(         const AttributeLinearInterpolation& interpolator,         const Attribute< MyType >& attribute )     {         // Interpolate using data from the interpolator         return interpolated_value;     } };



## Functions

### compute

```cpp
public AttributeType compute(const AttributeLinearInterpolation & , const Attribute<AttributeType> & attribute)
```

```cpp
Defined at ../../include/geode/basic/attribute_utils.h#85
```



# struct AttributeLinearInterpolationImpl

```cpp
Defined at ../../include/geode/basic/attribute_utils.h#133
```

## Functions

### compute

```cpp
public float compute(const AttributeLinearInterpolation & interpolator, const Attribute<float> & attribute)
```

```cpp
Defined at ../../include/geode/basic/attribute_utils.h#133
```



