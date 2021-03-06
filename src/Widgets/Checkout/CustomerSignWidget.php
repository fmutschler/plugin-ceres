<?php

namespace Ceres\Widgets\Checkout;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\WidgetSettingsFactory;
use Ceres\Widgets\Helper\WidgetCategories;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\WidgetTypes;

class CustomerSignWidget extends BaseWidget
{
    protected $template = "Ceres::Widgets.Checkout.CustomerSignWidget";

    public function getData()
    {
        return WidgetDataFactory::make("Ceres::CustomerSignWidget")
            ->withLabel("Widget.customerSignLabel")
            ->withPreviewImageUrl("/images/widgets/customer-sign.svg")
            ->withType(WidgetTypes::CHECKOUT)
            ->withCategory(WidgetCategories::CHECKOUT)
            ->withPosition(900)
            ->toArray();
    }

    public function getSettings()
    {
        /** @var WidgetSettingsFactory $settings */
        $settings = pluginApp(WidgetSettingsFactory::class);

        $settings->createCustomClass();
        $settings->createSpacing(false, true);

        return $settings->toArray();
    }
}
