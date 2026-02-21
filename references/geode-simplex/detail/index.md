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

# namespace detail



## Records

* [BRepRemeshInternalOptions](BRepRemeshInternalOptions.md)
* [SectionRemeshOptions](SectionRemeshOptions.md)


## Functions

### simplex_remesh

```cpp
void simplex_remesh(Section & section, const Metric2D & metric, const SectionRemeshOptions & options)
```


### simplex_remesh

```cpp
void simplex_remesh(BRep & brep, const BRepRemeshOptions & options, const BRepRemeshInternalOptions & internal_options)
```




