package com.yeumkyuseok.flickrbrowser;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import android.view.View;
import androidx.navigation.ui.AppBarConfiguration;
import com.yeumkyuseok.flickrbrowser.databinding.ActivitySearchBinding;


public class SearchActivity extends BaseActivity {

    private AppBarConfiguration appBarConfiguration;
    private ActivitySearchBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search);

        activateToolbar(true);

    }

}