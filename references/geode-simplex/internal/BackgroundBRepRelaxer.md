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

# class BackgroundBRepRelaxer


```cpp
Inherits from BackgroundBRepOptimizer
```



## Functions

### BackgroundBRepRelaxer

```cpp
public void BackgroundBRepRelaxer(const BackgroundBRepRelaxer & )
```


### operator=

```cpp
public BackgroundBRepRelaxer & operator=(const BackgroundBRepRelaxer & )
```


### BackgroundBRepRelaxer

```cpp
public void BackgroundBRepRelaxer(BackgroundBRepRelaxer && )
```


### operator=

```cpp
public BackgroundBRepRelaxer & operator=(BackgroundBRepRelaxer && )
```


### ~BackgroundBRepRelaxer

```cpp
public void ~BackgroundBRepRelaxer()
```


### BackgroundBRepRelaxer

```cpp
public void BackgroundBRepRelaxer(BackgroundBRepConstraintModifier & constraint_modifier, const BackgroundSolidInternalDistanceImprovementSimulator & improvement_simulator, const geode::Metric3D & metric)
```




