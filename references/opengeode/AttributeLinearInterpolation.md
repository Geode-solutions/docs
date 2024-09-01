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

# struct AttributeLinearInterpolation


## Members

```cpp
public FixedArray indices_

```

```cpp
public FixedArray lambdas_

```



## Functions

### AttributeLinearInterpolation

```cpp
public void AttributeLinearInterpolation(Span indices, Span lambdas)
```


### compute_value

```cpp
public T compute_value(const Attribute<T> & attribute)
```




