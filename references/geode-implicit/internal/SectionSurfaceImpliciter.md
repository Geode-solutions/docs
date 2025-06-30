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

# class SectionSurfaceImpliciter


## Functions

### SectionSurfaceImpliciter

```cpp
public void SectionSurfaceImpliciter(const Section & model, const Surface2D & surface, const ImplicitDataManager2D & data_manager)
```


### SectionSurfaceImpliciter

```cpp
public void SectionSurfaceImpliciter(SectionSurfaceImpliciter && surface_modeler)
```


### ~SectionSurfaceImpliciter

```cpp
public void ~SectionSurfaceImpliciter()
```


### compute_implicit_function

```cpp
public void compute_implicit_function(const ImplicitationParameters & computation_parameters, double function_value_interval)
```


### interpolate_function_on_mesh

```cpp
public void interpolate_function_on_mesh()
```




