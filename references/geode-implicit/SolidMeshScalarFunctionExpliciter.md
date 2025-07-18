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

# class SolidMeshScalarFunctionExpliciter


## Functions

### SolidMeshScalarFunctionExpliciter

```cpp
public void SolidMeshScalarFunctionExpliciter(std::unique_ptr<TetrahedralSolid3D> && solid, basic_string_view scalar_function_name)
```


### SolidMeshScalarFunctionExpliciter

```cpp
public void SolidMeshScalarFunctionExpliciter(SolidMeshScalarFunctionExpliciter && expliciter)
```


### ~SolidMeshScalarFunctionExpliciter

```cpp
public void ~SolidMeshScalarFunctionExpliciter()
```


### add_scalar_isovalues

```cpp
public void add_scalar_isovalues(Span scalar_function_values)
```


### add_one_scalar_isovalue

```cpp
public void add_one_scalar_isovalue(double isovalue)
```


### build_brep

```cpp
public BRep build_brep()
```




