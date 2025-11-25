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

# namespace internal



## Records

* [BackgroundSurfaceMetricDecimator](BackgroundSurfaceMetricDecimator.md)
* [BackgroundSurfaceQualityOptimizer](BackgroundSurfaceQualityOptimizer.md)
* [MetricBasedDecimator](MetricBasedDecimator.md)
* [Metric](Metric.md)
* [PillarBuilder](PillarBuilder.md)
* [Pillar](Pillar.md)
* [PropagateAlongPlane](PropagateAlongPlane.md)


## Functions

### decimate_background_surface_with_metric

```cpp
void decimate_background_surface_with_metric(BackgroundSurfaceConstraintModifier & constraint_modifier, const BackgroundSurfaceDecimatorOperator & decimator_operator, const geode::internal::Metric & metric)
```




