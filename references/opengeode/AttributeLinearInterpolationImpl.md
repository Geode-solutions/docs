<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# struct AttributeLinearInterpolationImpl


## Functions

### compute

```cpp
public GreyscaleColor compute(const AttributeLinearInterpolation & interpolator, const Attribute<GreyscaleColor> & attribute)
```




# struct AttributeLinearInterpolationImpl


## Functions

### compute

```cpp
public double compute(const AttributeLinearInterpolation & interpolator, const Attribute<double> & attribute)
```




# struct AttributeLinearInterpolationImpl


## Functions

### compute

```cpp
public Point<dimension> compute(const AttributeLinearInterpolation & interpolator, const Attribute<Point<dimension> > & attribute)
```




# struct AttributeLinearInterpolationImpl


## Functions

### compute

```cpp
public RGBColor compute(const AttributeLinearInterpolation & interpolator, const Attribute<RGBColor> & attribute)
```




# struct AttributeLinearInterpolationImpl


 Helper struct to interpolate an Attribute value. This struct may be customized for a given type. Example: template <> struct AttributeLinearInterpolationImpl< MyType > {     template < template < typename > class Attribute >     static MyType compute(         const AttributeLinearInterpolation& interpolator,         const Attribute< MyType >& attribute )     {         // Interpolate using data from the interpolator         return interpolated_value;     } };



## Functions

### compute

```cpp
public AttributeType compute(const AttributeLinearInterpolation & , const Attribute<AttributeType> & attribute)
```




# struct AttributeLinearInterpolationImpl


## Functions

### compute

```cpp
public float compute(const AttributeLinearInterpolation & interpolator, const Attribute<float> & attribute)
```




