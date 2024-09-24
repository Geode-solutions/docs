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



## Records

* [SimplexGeosciencesModelLibrary](SimplexGeosciencesModelLibrary.md)


## Functions

### model_simplex_remesh

```cpp
std::tuple<Model, ModelCopyMapping> model_simplex_remesh(const Model & model, const Metric3D & metric)
```


### model_simplex_remesh

```cpp
std::tuple<Model, ModelCopyMapping> model_simplex_remesh(const Model & model, const Metric2D & metric)
```




