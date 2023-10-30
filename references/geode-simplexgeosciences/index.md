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

# namespace geode



## Namespaces

* [detail](detail/index.md)


## Records

* [SimplexGeosciencesCrossSectionLibrary](SimplexGeosciencesCrossSectionLibrary.md)
* [SimplexGeosciencesStructuralModelLibrary](SimplexGeosciencesStructuralModelLibrary.md)


## Functions

### simplex_remesh

```cpp
tuple simplex_remesh(CrossSection && cross_section, const Metric2D & metric)
```


### simplex_remesh

```cpp
tuple simplex_remesh(StructuralModel && structural_model, const Metric3D & metric)
```




