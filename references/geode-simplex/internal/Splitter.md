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

# class Splitter


# class Splitter


## Functions

### Splitter

```cpp
public void Splitter<Model>(Model & model, ModelModifier & modifier, const Metric<dimension> & metric)
```


### Splitter

```cpp
public void Splitter<Model>(Model & model, ModelModifier & modifier, const Metric<dimension> & metric, Span surfaces)
```


### split

```cpp
public void split()
```




# class Splitter


