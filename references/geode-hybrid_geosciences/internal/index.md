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
* [PropagateAlongPlaneResult](PropagateAlongPlaneResult.md)
* [PropagateAlongPlane](PropagateAlongPlane.md)


## Functions

### is_part_of_model_boundaries

```cpp
bool is_part_of_model_boundaries(const StructuralModel & model, const Surface3D & surface)
```


### is_part_of_horizons

```cpp
bool is_part_of_horizons(const StructuralModel & model, const Surface3D & surface)
```


### is_part_of_faults

```cpp
bool is_part_of_faults(const StructuralModel & model, const Surface3D & surface)
```


### is_part_of_fault_blocks

```cpp
bool is_part_of_fault_blocks(const StructuralModel & model, const Block3D & block)
```


### is_fault_surface

```cpp
bool is_fault_surface(const StructuralModel & model, const Surface3D & surface, const uuid & fault_id)
```


### is_horizon_surface

```cpp
bool is_horizon_surface(const StructuralModel & model, const Surface3D & surface, const uuid & horizon_id)
```


### get_fault_containing_surface

```cpp
std::optional<uuid> get_fault_containing_surface(const StructuralModel & model, const Surface3D & surface)
```


### get_horizon_containing_surface

```cpp
std::optional<uuid> get_horizon_containing_surface(const StructuralModel & model, const Surface3D & surface)
```


### get_fault_block_containing_block

```cpp
std::optional<uuid> get_fault_block_containing_block(const StructuralModel & model, const Block3D & block)
```


### decimate_background_surface_with_metric

```cpp
void decimate_background_surface_with_metric(BackgroundSurfaceConstraintModifier & constraint_modifier, const TriangulatedSurfaceDecimatorOperator2D & decimator_operator, const geode::internal::Metric & metric)
```


### is_part_of_top

```cpp
bool is_part_of_top(const Surface3D & surface, absl::Span<const uuid> top_surfaces)
```


### is_part_of_bottom

```cpp
bool is_part_of_bottom(const Surface3D & surface, absl::Span<const uuid> bottom_surfaces)
```


### is_part_of_top_or_bottom

```cpp
bool is_part_of_top_or_bottom(const Surface3D & surface, absl::Span<const uuid> top_surfaces, absl::Span<const uuid> bottom_surfaces)
```


### is_line_incident_to_top

```cpp
bool is_line_incident_to_top(const BRep & model, const Line3D & line, absl::Span<const uuid> top_surfaces)
```


### is_line_incident_to_bottom

```cpp
bool is_line_incident_to_bottom(const BRep & model, const Line3D & line, absl::Span<const uuid> bottom_surfaces)
```


### is_line_incident_to_top_or_bottom

```cpp
bool is_line_incident_to_top_or_bottom(const BRep & model, const Line3D & line, absl::Span<const uuid> top_surfaces, absl::Span<const uuid> bottom_surfaces)
```


### is_line_incident_to_horizon_or_top_or_bottom

```cpp
bool is_line_incident_to_horizon_or_top_or_bottom(const StructuralModel & model, const Line3D & line, absl::Span<const uuid> top_surfaces, absl::Span<const uuid> bottom_surfaces)
```


### is_line_incident_to_horizon

```cpp
bool is_line_incident_to_horizon(const StructuralModel & model, const Line3D & line, const uuid & horizon_id)
```


### is_line_incident_to_fault

```cpp
bool is_line_incident_to_fault(const StructuralModel & model, const Line3D & line)
```


### is_line_incident_to_fault

```cpp
bool is_line_incident_to_fault(const StructuralModel & model, const Line3D & line, const uuid & fault_id)
```


### is_line_incident_to_model_boundaries

```cpp
bool is_line_incident_to_model_boundaries(const StructuralModel & model, const Line3D & line)
```


### is_line_incident_to_model_boundaries_other_than_top_or_bottom

```cpp
bool is_line_incident_to_model_boundaries_other_than_top_or_bottom(const StructuralModel & model, const Line3D & line, absl::Span<const uuid> top_surfaces, absl::Span<const uuid> bottom_surfaces)
```


### is_corner_internal

```cpp
bool is_corner_internal(const BRep & model, const Corner3D & corner)
```




